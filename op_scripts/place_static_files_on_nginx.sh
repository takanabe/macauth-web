mv ~/macauth/macauth-web/static/index.html /usr/share/nginx/html/
mv ~/macauth/macauth-web/static/bundle.js /usr/share/nginx/html/
mv ~/macauth/macauth-web/static/main.css /usr/share/nginx/html/
chown www-data:www-data /usr/share/nginx/html/bundle.js
chown www-data:www-data /usr/share/nginx/html/main.css
chown www-data:www-data /usr/share/nginx/html/index.html
