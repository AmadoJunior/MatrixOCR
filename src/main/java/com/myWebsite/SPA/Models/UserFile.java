package com.myWebsite.SPA.Models;

import java.io.*;
public class UserFile {
    private final long id;
    private final File imgFile;
    private String text;

    public UserFile(long id, File imgFile, String text){
        this.id = id;
        this.imgFile = imgFile;
        this.text = text;
    }

    public long getId(){
        return this.id;
    }

    public File getFile() { return this.imgFile; }

    public String getText(){
        return this.text;
    }

    public void setText(String text){
        this.text = text;
    }

}