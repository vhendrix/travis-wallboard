/*
 checker spec checks if the test environment still works.
 */
describe(
  'TravisProjectServiceTest', function () {
    //mock Application to allow us to inject our own dependencies
    beforeEach(module('travisWallBoard.objects'));
    beforeEach(module('travisWallBoard.services'));
    beforeEach(module('travisWallBoard.resources'));

    var
      $rootScope,
      TravisWallboardService,
      mockResponse;

    beforeEach(
      inject(
        function (_TravisWallboardService_, _$rootScope_) {
          $rootScope = _$rootScope_;
          TravisWallboardService = _TravisWallboardService_;

          mockResponse = {
            "builds": [
              {
                "pull_request": false,
                "pull_request_title": null,
                "state": "passed",
                "started_at": "2015-04-26T12:23:05Z",
                "finished_at": "2015-04-26T12:23:34Z"
              },
              {
                "pull_request": false,
                "pull_request_title": null,
                "state": "failed",
                "started_at": "2015-04-26T12:23:05Z",
                "finished_at": "2015-04-26T12:23:34Z"
              },
              {
                "pull_request": false,
                "pull_request_title": null,
                "state": "failed",
                "started_at": "2015-04-26T12:23:05Z",
                "finished_at": "2015-04-26T12:23:34Z"
              },
              {
                "pull_request": true,
                "pull_request_title": "Test pullrequest",
                "state": "failed",
                "started_at": "2015-04-26T12:23:05Z",
                "finished_at": "2015-04-26T12:23:34Z"
              },
              {
                "pull_request": true,
                "pull_request_title": "Test pullrequest",
                "state": "passed",
                "started_at": "2015-04-26T12:23:05Z",
                "finished_at": "2015-04-26T12:23:34Z"
              },
              {
                "pull_request": true,
                "pull_request_title": "Test pullrequest2",
                "state": "passed",
                "started_at": "2015-04-26T12:23:05Z",
                "finished_at": "2015-04-26T12:23:34Z"
              }
            ],
            "commits": [
              {
                "branch": "develop",
                "message": "Test message 1",
                "committer_name": "melvin",
                "committer_email": "aterlamia@gmail.com"
              },
              {
                "branch": "develop",
                "message": "Test message 3",
                "committer_name": "T. Tester",
                "committer_email": "tester@test.com"
              },
              {
                "branch": "develop",
                "message": "Test message 4",
                "committer_name": "T. Tester",
                "committer_email": "tester@test.com"
              },
              {
                "branch": "master",
                "message": "Test message 4",
                "committer_name": "T. Tester",
                "committer_email": "tester@test.com"
              },
              {
                "branch": "master",
                "message": "Test message 5",
                "committer_name": "melvin",
                "committer_email": "aterlamia@gmail.com"
              },
              {
                "branch": "master",
                "message": "Test message 6",
                "committer_name": "T. Tester2",
                "committer_email": "tester2@test.com"
              }
            ]
          };
        }
      )
    );

    describe(
      'Get build for projects from response funcion', function () {
        it(
          'Only Returns last of every branch.', function () {
            var builds = TravisWallboardService.getBuildsForProject('test', mockResponse);

            var expected = {
                "develop": {
                  "name": "test",
                  "state": "passed",
                  "finished_at": "2015-04-26T12:23:34Z",
                  "started_at": "2015-04-26T12:23:05Z",
                  "is_pr": false,
                  "branch": "develop",
                  "commit_message": "Test message 1",
                  "committer_name": "melvin",
                  "committer_email": "aterlamia@gmail.com"
                },
                "Test pullrequest": {
                  "name": "test",
                  "state": "failed",
                  "finished_at": "2015-04-26T12:23:34Z",
                  "started_at": "2015-04-26T12:23:05Z",
                  "is_pr": true,
                  "branch": "Test pullrequest",
                  "commit_message": "Test message 4",
                  "committer_name": "T. Tester",
                  "committer_email": "tester@test.com"
                },
                "Test pullrequest2": {
                  "name": "test",
                  "state": "passed",
                  "finished_at": "2015-04-26T12:23:34Z",
                  "started_at": "2015-04-26T12:23:05Z",
                  "is_pr": true,
                  "branch": "Test pullrequest2",
                  "commit_message": "Test message 6",
                  "committer_name": "T. Tester2",
                  "committer_email": "tester2@test.com"
                }
              };

            expect(builds).toEqual(expected);
          }
        );
      }
    );
  }
);
