package com.qanda.content.service;

import com.qanda.content.model.Error;
import com.qanda.content.model.ErrorHandler;
import com.qanda.content.model.dataModel.Answer;
import com.qanda.content.model.dataModel.Question;
import com.qanda.content.model.dataModel.User;
import com.qanda.content.model.viewModel.LoginForm;
import com.qanda.content.model.viewModel.ModInfoForm;
import com.qanda.content.model.viewModel.RegisterForm;

import java.util.List;

/**
 * Created by huangrui on 2016/11/28.
 */
public interface UserService {
    /**用户注册**/
    boolean register(RegisterForm form, ErrorHandler errorHandler);

    /**用户登录**/
    String login(LoginForm form, ErrorHandler errorHandler);

    /**用户登出**/
    void logout();

    /**用户信息修改**/
    boolean modifyUserInfo(ModInfoForm form, ErrorHandler errorHandler);

    /**用户详细信息获取**/
    User fetchUserInfo(ErrorHandler errorHandler);

    /**用户所提出的问题获取**/
    List<Question> fetchUserQuestions(ErrorHandler errorHandler);

    /**用户所发表的回答获取**/
    List<Answer> fetchUserAnswers(ErrorHandler errorHandler);

    /**密码重置**/
    void resetPassword(String email);

    /**用户状态验证**/
    boolean verifyUserState(String session);

    /**通过用户id获取用户详细信息**/
    User getUserInfoById(String uid, ErrorHandler errorHandler);

    /**通过用户id获取用户所提出的问题**/
    List<Question> getUserQuestionsByUid(String uid, ErrorHandler errorHandler);

    /**通过用户id获取用户所发表的回答**/
    List<Answer> getUserAnswersByUid(String uid, ErrorHandler errorHandler);

//    /**用户删除所有问题**/
//    boolean deleteAllQuestions(ErrorHandler errorHandler);
//
//    /**用户删除所有回答**/
//    boolean deleteAllAnswers(ErrorHandler errorHandler);
}
