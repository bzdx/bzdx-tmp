package routers

import (
	"{{ appname }}/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.PageController{})
}
