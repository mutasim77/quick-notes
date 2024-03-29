SERVER_DIR = server
CLIENT_DIR = client
ADMIN_PANEL_DIR = admin-panel

install:
	@echo "Installing server dependencies..."
	cd $(SERVER_DIR) && go mod download
	@echo "Installing client dependencies..."
	cd $(CLIENT_DIR) && npm install
	@echo "Installing admin panel dependencies..."
	cd $(ADMIN_PANEL_DIR) && yarn

run-server:
	@echo "Running server..."
	cd $(SERVER_DIR)/cmd && go run main.go

run-client:
	@echo "Running client..."
	cd $(CLIENT_DIR) && npm run dev

run-admin-panel:
	@echo "Running admin panel..."
	cd $(ADMIN_PANEL_DIR) && yarn run dev

.PHONY: install run-server run-client run-admin-panel
