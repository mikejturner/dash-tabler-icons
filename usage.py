import dash_tabler_icons as dti
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div([
    dti.IconGhost(size=64, color="teal", stroke=2),
])


if __name__ == '__main__':
    app.run_server(debug=True)
