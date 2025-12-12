package handlers

import (
	"net/http"
	"strings"

	"github.com/Edwin9301/Zen/backend/pkg"
	"github.com/gin-gonic/gin"
)

func (s *Server) getDashboardStatsHandler(ctx *gin.Context) {
	payload, exists := ctx.Get(authorizationPayloadKey)
	if !exists {
		ctx.JSON(
			http.StatusUnauthorized,
			errorResponse(pkg.Errorf(pkg.AUTHENTICATION_ERROR, "Unauthorized")),
		)
		return
	}

	userPayload, ok := payload.(*pkg.Payload)
	if !ok {
		ctx.JSON(
			http.StatusUnauthorized,
			errorResponse(pkg.Errorf(pkg.AUTHENTICATION_ERROR, "Invalid auth payload")),
		)
		return
	}

	dashboardStats, err := s.repo.UserRepository.GetDashboardData(ctx, strings.ToLower(userPayload.Role) == "admin")
	if err != nil {
		ctx.JSON(pkg.ErrorToStatusCode(err), errorResponse(err))
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"data": dashboardStats})
}
