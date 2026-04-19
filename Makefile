ifneq (,$(wildcard ./.env.local))
	include .env.local
	export
	# ENV_FILE_PARAM = --env-file .env
endif

MAKEFILE_LIST = Makefile
THIS_DIR := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))

VERSION = $(shell node -e 'console.log(require("./package.json").version)')

# NOTE: переменная для команды запуска
RUN_NPM_COMMAND=pnpm run

# NOTE: самодокументирование команд makefile
help: ## help - отображение списка доступных команд
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'

help_full: ## help_full - отображение списка с блооками комментариев
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

mock_server: ## mock_server - run local http server for /public and mocks data by API
	npx json-server --watch ./public/mocks/mock_db.json --port 8081

dev: ## dev - run development
	$(RUN_NPM_COMMAND) dev