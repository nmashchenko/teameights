rebase:
	yarn schema:drop && \
	rm -rf ./src/libs/database/migrations/* && \
	yarn migration:generate ./src/libs/database/migrations/chat	&& \
	yarn migration:run && \
	yarn seed:run

