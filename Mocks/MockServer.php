<?php
if ($_REQUEST['endpoint'] === 'repos' && $_REQUEST['slug'] !== 'aterlamia/travis-wallboard/builds') {
    print file_get_contents('repos.json');
} else {
    print file_get_contents('builds.json');
}
