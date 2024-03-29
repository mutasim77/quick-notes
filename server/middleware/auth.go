package middleware

import (
	"os"
	"strconv"

	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
)

func AuthMiddleware(c *fiber.Ctx) error {
	// Extract JWT token from cookie
	cookie := c.Cookies("jwt")
	if cookie == "" {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "missing JWT token",
		})
	}

	// Parse JWT token
	jwtSecretKey := os.Getenv("JWT_SECRET_KEY")
	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(jwtSecretKey), nil
	})
	if err != nil || !token.Valid {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "invalid JWT token",
		})
	}

	// Extract user ID from JWT claims
	claims, ok := token.Claims.(*jwt.StandardClaims)
	if !ok {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "failed to parse JWT claims",
		})
	}

	userID, err := strconv.Atoi(claims.Issuer)
	if err != nil {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "failed to parse user ID",
		})
	}

	// Set user ID in request *context*
	c.Locals("userID", userID)

	return c.Next()
}
