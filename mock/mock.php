<?php
header("Access-Control-Allow-Origin:*");
if ($_SERVER['REQUEST_METHOD'] === "OPTIONS") {
    header("Access-Control-Allow-Credentials:true");
    header("Access-Control-Allow-Methods:HEAD, GET, POST, PATCH, PUT, DELETE");
    header("Access-Control-Allow-Headers:Content-Type, Authorization, Accept, If-None-Match, If-Modified-Since, X-User-Agent, Travis-API-Version");
    header("Access-Control-Expose-Headers:Content-Type, Cache-Control, Expires, Etag, Last-Modified");

    print 'Content-Type, Authorization, Accept, If-None-Match, If-Modified-Since, X-User-Agent, Travis-API-Version';
} else {
    $headers = getallheaders();
    $filename = str_replace(['/', '\\', ' ', '?', '=', '&'], '', $headers['Authorization'] . $_GET['path']) . '.json';
    if (!file_exists(__DIR__ . '/jsons/' . $filename)) {
        if ($_GET['type'] == 'private') {
            $url = 'https://api.travis-ci.com/';
        } else {
            $url = 'https://api.travis-ci.org/';
        }

        $s = curl_init();

        curl_setopt($s, CURLOPT_URL, $url . $_GET['path']);
        curl_setopt($s, CURLOPT_HTTPHEADER, array(
            'Authorization:' . $headers['Authorization'],
            'Accept: application/vnd.travis-ci.2+json'
        ));
        curl_setopt($s, CURLOPT_TIMEOUT, 30);
        curl_setopt($s, CURLOPT_MAXREDIRS, 3);
        curl_setopt($s, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($s, CURLOPT_FOLLOWLOCATION, TRUE);

//        $json = curl_exec($s);
        curl_close($s);

        file_put_contents(__DIR__ . '/jsons/' . $filename, $json);
    } else{
        $json = file_get_contents(__DIR__ . '/jsons/' . $filename);
    }
    print $json;
}
