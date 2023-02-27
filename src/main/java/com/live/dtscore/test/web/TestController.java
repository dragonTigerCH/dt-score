package com.live.dtscore.test.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/api")
@Slf4j
public class TestController {


    @GetMapping("/hello")
    public List<String> test(){
        log.info("출입 test()");
        return Arrays.asList("안녕1","안녕2");
    }
    @GetMapping("/board")
    public Map<String, String> board(){
        log.info("출입 board()");
        Map<String, String> stringStringMap = new HashMap<>();
        stringStringMap.put("board1","board1");
        stringStringMap.put("board2","board2");
        stringStringMap.put("board3","board3");
        stringStringMap.put("board4","board4");
        return stringStringMap;
    }


}
