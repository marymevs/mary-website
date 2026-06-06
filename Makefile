deploy:
	firebase deploy --only hosting

preview:
	firebase hosting:channel:deploy preview

.PHONY: deploy preview
