package main

import (
	DB "jwt/config"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	accountRouter "jwt/routes"
)

func main() {
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"PUT", "PATCH", "GET", "POST", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Access-Control-Allow-Origin`", "Access-Control-Allow-Credentials", "Authorization"},
		ExposeHeaders:    []string{"Content-Length", "Set-Cookie"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	DB.ConnectDB()
	accountRouter.AccountRouter(router)

	router.Run(":8000")
}
