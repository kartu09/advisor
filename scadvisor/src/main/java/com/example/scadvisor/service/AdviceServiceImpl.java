//package com.example.scadvisor.service;
//
//import com.example.scadvisor.entity.Advice;
//import com.example.scadvisor.repository.AdviceRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class AdviceServiceImpl implements AdviceService{
//
//    @Autowired
//    AdviceRepository adviceRepository;
//
//    @Override
//    public Advice createAdvice(Advice advice) {
//        try {
//            if(advice != null) {
//                Optional<Advice> adviceToSave = adviceRepository.findById(advice.getId());
//                if (adviceToSave.isPresent()){
//                } else {
//                    Advice adviceSaved = adviceRepository.save(advice);
//                    return adviceSaved;
//                }
//            }
//        } catch (RuntimeException e) {
//            throw new RuntimeException(e + "No se puede crear el nuevo advice");
//        }
//        return null;
//    }
//
//    @Override
//    public void deleteAdvice(Integer id){
//        try {
//            adviceRepository.deleteById(id);
//        }
//        catch (RuntimeException e) {
//            throw new RuntimeException(e + "No se puede borrar el advice con id " + id);
//        }
//    }
//
//    @Override
//    public Advice getAdvice(Integer id) throws RuntimeException {
//        Advice adviceToReturn = null;
//        try {
//            Optional<Advice> advice = adviceRepository.findById(id);
//            adviceToReturn = advice.get();
//        } catch (RuntimeException e) {
//            throw new RuntimeException(e);
//        }
//        return adviceToReturn;
//    }
//
//    @Override
//    public List<Advice> getAllAdvicesFromMatchId(Integer matchId) throws RuntimeException{
//        try {
//            List<Advice> adviceList = (List<Advice>) adviceRepository.findAll();
//            return adviceList;
//        }
//        catch (RuntimeException e) {
//            throw new RuntimeException(e);
//        }
//    }
//
//    @Override
//    public void save(Advice advice) {
//        adviceRepository.save(advice);
//    }
//}
