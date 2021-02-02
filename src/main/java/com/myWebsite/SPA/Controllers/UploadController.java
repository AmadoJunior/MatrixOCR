package com.myWebsite.SPA.Controllers;

import java.io.*;
import java.util.concurrent.atomic.AtomicLong;

import net.sourceforge.tess4j.TesseractException;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import com.myWebsite.SPA.Models.UserFile;
import net.sourceforge.tess4j.Tesseract;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("${api.base.path}")
public class UploadController{
    private final AtomicLong counter = new AtomicLong();
    private final Tesseract OCR = new Tesseract();

    public String decodeImage(File file){
        try{
            String curDir = System.getProperty("user.dir");
            this.OCR.setDatapath(curDir + "/tessdata");
            return this.OCR.doOCR(file);
        } catch(TesseractException e){
            e.printStackTrace();
        }
        return null;
    }

    @PostMapping("/upload")
    public UserFile HandleImageUpload(@RequestBody String base64Image){
        byte[] byteData = Base64.decodeBase64(base64Image.split(",")[1]);
        File file = new File("img.png");
        try (OutputStream os = new FileOutputStream(file)) {
            os.write(byteData);
        } catch(IOException e){
            e.printStackTrace();
        }
        String imageText = decodeImage(file);
        return new UserFile(counter.incrementAndGet(), file , imageText);
    }
}