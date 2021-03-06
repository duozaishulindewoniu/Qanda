package com.qanda.content.model.dataModel;

import org.springframework.stereotype.Component;

import java.util.HashMap;

/**
 * Created by huangrui on 2016/12/18.
 */
@Component
public class BaseUser {
    protected String uid;
    protected String name;
    protected String avatar;

    public String getUid() { return uid; }
    public void setUid(String uid) { this.uid = uid; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getAvatar() { return avatar; }
    public void setAvatar(String avatar) { this.avatar = avatar; }

    public HashMap<String, Object> toHashMap() {
        HashMap<String, Object> hashMap = new HashMap<>();
        hashMap.put("uid", this.uid);
        hashMap.put("name", this.name);
        hashMap.put("avatar", this.avatar);
        return hashMap;
    }

    public HashMap<String, Object> toHashMap(HashMap<String, Object> otherMap) {
        HashMap<String, Object> hashMap = toHashMap();
        hashMap.putAll(otherMap);
        return hashMap;
    }
}
