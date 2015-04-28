/*
 checker spec checks if the test environment still works.
 */
describe(
  'TravisServiceTest', function () {
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
            "repos": [
              {
                "id": 1,
                "slug": "testRepo1",
                "active": true,
                "last_build_finished_at": "2015-04-26T12:23:34Z"
              },
              {
                "id": 2,
                "slug": "testRepo2",
                "active": false,
                "last_build_finished_at": "2015-04-26T12:23:34Z"
              },
              {
                "id": 3,
                "slug": "testRepo3",
                "active": false,
                "last_build_finished_at": "2015-04-26T12:23:34Z"
              },
              {
                "id": 4,
                "slug": "testRepo4",
                "active": true,
                "last_build_finished_at": null
              }
            ]
          };
        }
      )
    );

    describe(
      'Get repos from response funcion', function () {
        it(
          'OnlyReturns active repos', function () {
            var repos = TravisWallboardService.getReposFromResponse(mockResponse);

            var expexted = {
              1: {
                "id": 1,
                "slug": "testRepo1",
                "active": true,
                "last_build_finished_at": "2015-04-26T12:23:34Z"
              },
              4: {
                "id": 4,
                "slug": "testRepo4",
                "active": true,
                "last_build_finished_at": null
              }
            };

            expect(repos).toEqual(expexted);
          }
        );
      }
    );

    describe(
      'Get Updated Repos From Response', function () {
        it(
          'should return the repo that changed from done to building', function () {

            var repos = {
              1: {
                "id": 1,
                "slug": "testRepo1",
                "active": true,
                "last_build_finished_at": "2015-04-26T12:23:34Z"
              },
              4: {
                "id": 4,
                "slug": "testRepo4",
                "active": true,
                "last_build_finished_at": "2015-04-26T12:23:34Z"
              }
            };

            var updated = TravisWallboardService.getUpdatedReposFromResponse(repos, mockResponse);

            expect(updated).toEqual(
              {
                4: {
                  "id": 4,
                  "slug": "testRepo4",
                  "active": true,
                  "last_build_finished_at": null
                }
              }
            );
          }
        );
        it(
          'should return the repo that changed only once for one change', function () {

            var repos = {
              1: {
                "id": 1,
                "slug": "testRepo1",
                "active": true,
                "last_build_finished_at": "2015-04-26T12:23:34Z"
              },
              4: {
                "id": 4,
                "slug": "testRepo4",
                "active": true,
                "last_build_finished_at": "2015-04-26T12:23:34Z"
              }
            };

            var updated = TravisWallboardService.getUpdatedReposFromResponse(repos, mockResponse);

            expect(updated).toEqual(
              {
                4: {
                  "id": 4,
                  "slug": "testRepo4",
                  "active": true,
                  "last_build_finished_at": null
                }
              }
            );

            updated = TravisWallboardService.getUpdatedReposFromResponse(repos, mockResponse);

            for (var i = 0; i < 10; i++) {
              expect(updated).toEqual({});
            }
          }
        );

        it(
          'should return the repo once for build state and once for done state', function () {

            var repos = {
              1: {
                "id": 1,
                "slug": "testRepo1",
                "active": true,
                "last_build_finished_at": "2015-04-26T12:23:34Z"
              },
              4: {
                "id": 4,
                "slug": "testRepo4",
                "active": true,
                "last_build_finished_at": "2015-04-26T12:23:34Z"
              }
            };

            var updated = TravisWallboardService.getUpdatedReposFromResponse(repos, mockResponse);

            expect(updated).toEqual(
              {
                4: {
                  "id": 4,
                  "slug": "testRepo4",
                  "active": true,
                  "last_build_finished_at": null
                }
              }
            );

            expect(TravisWallboardService.getUpdatedReposFromResponse(repos, mockResponse)).toEqual({});

            mockResponse.repos[ 3 ].last_build_finished_at = "2015-04-26T12:23:34Z";
            expect(TravisWallboardService.getUpdatedReposFromResponse(repos, mockResponse)).toEqual(
              {
                4: {
                  "id": 4,
                  "slug": "testRepo4",
                  "active": true,
                  "last_build_finished_at": "2015-04-26T12:23:34Z"
                }
              }
            );

            expect(TravisWallboardService.getUpdatedReposFromResponse(repos, mockResponse)).toEqual({});
          }
        );
      }
    );
  }
);
