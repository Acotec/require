function setCookie(c_name,value,extime,exdays){
        //use 0 for cookie to never expire
        var exdate,c_value;
        exdate=new Date();
        if(extime||extime==0){
            if(extime==0){extime = null}
            exdate.setTime(exdate.getTime()+(extime*1000));
            c_value=escape(value) + ((extime==null) ? "" : "; expires="+exdate.toGMTString());
            document.cookie=c_name + "=" + c_value;
        }
        else if(exdays||exdays==0){
            if(exdays==0){exdays = null}
            exdate.setDate(exdate.getDate() + exdays);
            c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
            document.cookie=c_name + "=" + c_value;
        }else{
            console.log('cookie not set')
        }
    }

    function getCookie(c_name){
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1){c_start = c_value.indexOf(c_name + "=");}
        if (c_start == -1){c_value = null;}
        else{c_start = c_value.indexOf("=", c_start) + 1;
             var c_end = c_value.indexOf(";", c_start);
             if (c_end == -1){c_end = c_value.length;}
             c_value = unescape(c_value.substring(c_start,c_end));}
        return c_value;
    }
