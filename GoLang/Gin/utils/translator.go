package utils

import (
	"fmt"
	"github.com/gin-gonic/gin/binding"
	"github.com/go-playground/locales/en"
	"github.com/go-playground/locales/zh"
	ut "github.com/go-playground/universal-translator"
	"github.com/go-playground/validator/v10"
	enTranslations "github.com/go-playground/validator/v10/translations/en"
	chTranslations "github.com/go-playground/validator/v10/translations/zh"
	"strings"
)

var trans ut.Translator
var transMap = map[string]string{
	"name": "黄文杰",
}

// TransInit loca 通常取决于 http 请求头的 'Accept-Language'
func TransInit(local string) (err error) {
	if v, ok := binding.Validator.Engine().(*validator.Validate); ok {
		zhT := zh.New() //chinese
		enT := en.New() //english
		uni := ut.New(enT, zhT, enT)

		var o bool
		trans, o = uni.GetTranslator(local)
		if !o {
			return fmt.Errorf("uni.GetTranslator(%s) failed", local)
		}
		//register translate
		// 注册翻译器
		switch local {
		case "en":
			err = enTranslations.RegisterDefaultTranslations(v, trans)
		case "zh":
			err = chTranslations.RegisterDefaultTranslations(v, trans)
		default:
			err = enTranslations.RegisterDefaultTranslations(v, trans)
		}
		return
	}
	return
}

// GetFormError 获取表单错误
func GetFormError(err error) string {
	// 翻译表单错误
	errs, ok := err.(validator.ValidationErrors)
	if !ok {
		// 非validator.ValidationErrors类型错误直接返回
		return err.Error()
	}
	return transTagName(transMap, errs.Translate(trans))
}

// 自定义翻译函数
func transTagName(libTans, err interface{}) string {
	fmt.Println(err)
	errs := make(map[string]string)
	for k, v := range err.(validator.ValidationErrorsTranslations) {
		for key, value := range libTans.(map[string]string) {
			v = strings.Replace(v, key, value, -1)
		}
		errs[k] = v
	}

	var keyList []string    // 保存键值
	for key := range errs { // 遍历 errMap
		keyList = append(keyList, key) // 将 errMap 中的键值保存到 keyList 中
	}

	if len(keyList) > 0 {
		return errs[keyList[0]] // 返回字典中第一个错误信息
	}

	return ""
}
