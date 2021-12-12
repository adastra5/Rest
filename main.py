import http.client
from flask import Flask, request, send_from_directory, Response, render_template

app = Flask(__name__, static_url_path='')

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/tires')
def tires():
    conn = http.client.HTTPSConnection("api.mercedes-benz.com")
    payload = ''
    headers = {
        'Authorization': 'Bearer a1b2c3d4-a1b2-a1b2-a1b2-a1b2c3d4e5f6'
    }
    conn.request("GET", "/experimental/connectedvehicle_tryout/v2/vehicles/1234567890ABCD1234/tires", payload, headers)
    res = conn.getresponse()
    data = res.read()
    return Response(data, mimetype='application/json')

@app.route('/elec_range')
def elec_range():
    conn = http.client.HTTPSConnection("api.mercedes-benz.com")
    payload = ''
    headers = {
        'Authorization': 'Bearer 2c2c222c-e123-4123-v123-2c2c222c2c22'
    }
    conn.request("GET", "/vehicledata_tryout/v2/vehicles/WDB111111ZZZ22222/resources/soc", payload, headers)
    res = conn.getresponse()
    data = res.read()
    return Response(data, mimetype='application/json')

@app.route('/battery')
def battery():
    conn = http.client.HTTPSConnection("api.mercedes-benz.com")
    payload = ''
    headers = {
        'Authorization': 'Bearer a1b2c3d4-a1b2-a1b2-a1b2-a1b2c3d4e5f6'
    }
    conn.request("GET", "/experimental/connectedvehicle_tryout/v2/vehicles/1234567890ABCD1234/stateofcharge", payload, headers)
    res = conn.getresponse()
    data = res.read()
    return Response(data, mimetype='application/json')

@app.route('/static/<path:path>')
def send_js(path):
    return send_from_directory('static', path)



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)