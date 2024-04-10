# marcelvenema.github.io


# marcelvenema.com-tailwindcss
Personal webserver based on Hugo and Tailwind CSS


npm run project-setup
npm install

```
 hugo server --watch --logLevel info --buildDrafts --cleanDestinationDir --disableFastRender --baseURL http://192.168.29.12:1313 --bind 0.0.0.0
```


## Firewall local Hugo server
```
sudo firewall-cmd --add-port=1313/tcp
sudo firewall-cmd --runtime-to-permanent
```
