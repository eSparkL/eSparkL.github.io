# Java 开发常用正则大全（附带代码示例）

Java 正则注意：字符串里 `\` 需要转义写成 `\\`
两种使用方式：`str.matches("正则")` / `Pattern.matcher()`

## 一、基础通用正则

### 1\. 数字相关

```java
// 纯数字（1位及以上）
String numReg = "^\\d+$";
// 0~9 6位数字（学号、验证码）
String sixNum = "^\\d{6}$";
// 6~10位数字（学号）
String stuIdReg = "^\\d{6,10}$";
// 正整数（不含0）
String positiveNum = "^[1-9]\\d*$";
// 浮点数（支持正负）
String doubleReg = "^-?\\d+(\\.\\d+)?$";
```

### 2\. 字符串、字母

```java
// 纯小写英文
String lower = "^[a-z]+$";
// 纯大写英文
String upper = "^[A-Z]+$";
// 大小写字母混合
String letter = "^[A-Za-z]+$";
// 字母+数字
String letterNum = "^[A-Za-z0-9]+$";
// 字母数字下划线（\\w）
String word = "^\\w+$";
```

### 3\. 中文匹配

```java
// 纯中文
String chinese = "^[\\u4e00-\\u9fa5]+$";
// 中文+英文+数字
String nameReg = "^[\\u4e00-\\u9fa5A-Za-z0-9]+$";
```

## 二、业务高频正则（项目最常用）

### 1\. 手机号（国内 11 位）

```java
// 兼容130-139、144/147、150-159、162、170-179、180-189、190-199
String phoneReg = "^1[3-9]\\d{9}$";
```

### 2\. 邮箱

```java
String emailReg = "^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\\.[a-zA-Z]{2,})+$";
```

### 3\. 身份证（18 位，兼容末尾 X/x）

```java
String idCardReg = "^[1-9]\\d{5}(19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])\\d{3}[0-9Xx]$";
```

### 4\. 密码规则

```java
// 6-16位字母数字
String pwd1 = "^[A-Za-z0-9]{6,16}$";
// 6-16位，必须包含字母+数字
String pwd2 = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z0-9]{6,16}$";
// 强密码：字母+数字+特殊符号 !@#$%^&*
String pwd3 = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$";
```

### 5\. URL 简单校验

```java
String urlReg = "^(http|https)://[a-zA-Z0-9.-]+(/.*)?$";
```

### 6\. IP 地址（IPv4）

```java
String ipReg = "^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$";
```

### 7\. 日期 yyyy\-MM\-dd

```java
String dateReg = "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$";
```

### 8\. 用户名（4\-16 字母数字下划线，不能数字开头）

```java
String usernameReg = "^[A-Za-z]\\w{3,15}$";
```

### 9\. 你之前需求：学号 \- 姓名 \- 密码 三段格式

```java
// 6~10位数字-非横杠姓名-6~16位字母数字
String userInfoReg = "^\\d{6,10}-[^-]+-[A-Za-z0-9]{6,16}$";
```

## 三、正则替换、提取常用语法

### 1\. 去除所有空格

```java
String str = "  123  abc ";
String res = str.replaceAll("\\s+", "");
```

### 2\. 只保留数字

```java
String numOnly = str.replaceAll("[^0-9]", "");
```

### 3\. 只保留中文

```java
String chinaOnly = str.replaceAll("[^\\u4e00-\\u9fa5]", "");
```

### 4\. 匹配分组提取（Pattern/Matcher）

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexTest {
    public static void main(String[] args) {
        String info = "2026001-张三-123456";
        Pattern p = Pattern.compile("^(\\d{6,10})-([^-]+)-([A-Za-z0-9]{6,16})$");
        Matcher m = p.matcher(info);
        if(m.matches()){
            String id = m.group(1);  // 学号
            String name = m.group(2);// 姓名
            String pwd = m.group(3); // 密码
            System.out.println(id + " " + name + " " + pwd);
        }
    }
}
```

## 四、Java 正则元字符速查表

|符号|说明|
|---|---|
|`\\d`|数字 0\-9|
|`\\D`|非数字|
|`\\w`|字母、数字、下划线|
|`\\W`|非单词字符|
|`\\s`|空格、制表、换行|
|`\\S`|非空白字符|
|`.`|任意单个字符（不含换行）|
|`^`|字符串开头|
|`$`|字符串结尾|
|`[]`|字符集 `[0-9a-z]`|
|`[^]`|取反 `[^-]` 不能是横杠|
|`{n}`|恰好 n 次|
|`{n,m}`|n\~m 次|
|`+`|≥1 次|
|`*`|≥0 次|
|`?`|0 或 1 次|
|`()`|分组，可 group 提取|
|`(?=)`|正向预查（密码强弱校验）|

## 五、通用工具封装（直接复制使用）

```java
public class RegexUtil {

    // 手机号校验
    public static boolean isPhone(String phone) {
        if (phone == null) return false;
        return phone.matches("^1[3-9]\\d{9}$");
    }

    // 邮箱校验
    public static boolean isEmail(String email) {
        if (email == null) return false;
        return email.matches("^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\\.[a-zA-Z]{2,})+$");
    }

    // 学号6-10位数字
    public static boolean isStuId(String id) {
        if (id == null) return false;
        return id.matches("^\\d{6,10}$");
    }

    // 学号-姓名-密码完整格式
    public static boolean checkUserInfo(String info) {
        if (info == null || info.isBlank()) return false;
        return info.matches("^\\d{6,10}-[^-]+-[A-Za-z0-9]{6,16}$");
    }
}
```

> （注：部分内容可能由 AI 生成）