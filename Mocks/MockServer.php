<?php
//    header('HTTP/1.1 503 Service Temporarily Unavailable');
//    header('Status: 503 Service Temporarily Unavailable');
//    header('Retry-After: 300');//300 seconds

header('Content-Type: application/json');
if ($_REQUEST['slug'] === 'repos/aterlamia') {
    print file_get_contents('repos.json');
} else {
    print file_get_contents('builds.json');
}
