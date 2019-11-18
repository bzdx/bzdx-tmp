package main

import (
	_ "{{ appname }}/routers"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
)

func main() {
	if beego.BConfig.RunMode == "dev" {
		var FilterNoCache = func(ctx *context.Context) {
			ctx.Output.Header("Cache-Control", "no-cache, no-store, must-revalidate")
			ctx.Output.Header("Pragma", "no-cache")
			ctx.Output.Header("Expires","0")
		}

		beego.InsertFilter("/static/*",beego.BeforeStatic, FilterNoCache)
	}
	beego.Run()
}

