dev:
	docker run -it --rm -v $$PWD:/app -p 5000:5000 ruphin/webdev yarn run dev
.PHONY: dev

shell:
	docker run -it --rm -v $$PWD:/app ruphin/webdev bash
.PHONY: shell
