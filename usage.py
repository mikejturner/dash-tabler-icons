import dash_tabler_icons as dti
from dash import Dash, callback, html, Input, Output

app = Dash(__name__)

app.layout = html.Div([
    dti.IconBrandAmazon(size=16),
])



if __name__ == '__main__':
    app.run_server(debug=True)
