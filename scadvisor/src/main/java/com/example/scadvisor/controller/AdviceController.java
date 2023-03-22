//package com.example.scadvisor.controller;
//
//import com.example.scadvisor.entity.Advice;
//import com.example.scadvisor.service.AdviceService;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("api/advice")
//@CrossOrigin(origins = "*")
//public class AdviceController {
//    @Autowired
//    AdviceService adviceService;
//
//    private static final Logger logger = LoggerFactory.getLogger(AdviceController.class);
//
//    @GetMapping("/{id}")
//    public Advice getAdvice(@PathVariable("id") Integer id){
//        logger.info("INSIDE /api/advice/id" );
//        return adviceService.getAdvice(id);
//    }
//
//    @GetMapping("/all")
//    public List<Advice> getAll(@PathVariable("id") Integer matchId){
//        return adviceService.getAllAdvicesFromMatchId(matchId);
//    }
//
//    @PostMapping("/new")
//    public void newAdvice(@RequestBody Advice advice){
//        logger.info("Creating new advice:" + advice.getName());
//        adviceService.createAdvice(advice);
//        logger.info("Created advice:" + advice.getName());
////        return ResponseEntity.ok().build();
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public void deleteAdvice(@PathVariable("id") Integer id){
//        adviceService.deleteAdvice(id);
//    }
//}
