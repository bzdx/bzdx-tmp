package routers

import (
	"bzdx-tmp/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.PageController{})
}
