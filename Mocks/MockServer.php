<?php
if ($_REQUEST['slug'] !== 'repos/aterlamia') {
    print file_get_contents('repos.json');
} else {
    print file_get_contents('builds.json');
}
