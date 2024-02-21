LOCAL = -f ./environments/local/docker-compose.yml --env-file ./environments/local/.env
PROD = -f ./environments/prod/docker-compose.yml --env-file ./environments/prod/.env

# -----------------------------
# Local only.

local-up:
	docker-compose $(LOCAL) up -d

local-start:
	docker-compose $(LOCAL) start

local-stop:
	docker-compose $(LOCAL) stop

local-restart:
	docker-compose $(LOCAL) restart

local-logs:
	docker-compose $(LOCAL) logs

local-rm:
	docker-compose $(LOCAL) stop
	docker-compose $(LOCAL) rm

# -----------------------------
# Prod only.

prod-up:
	docker-compose $(PROD) up -d

prod-start:
	docker-compose $(PROD) start

prod-stop:
	docker-compose $(PROD) stop

prod-restart:
	docker-compose $(PROD) restart

prod-logs:
	docker-compose $(PROD) logs

prod-rm:
	docker-compose $(PROD) stop
	docker-compose $(PROD) rm
