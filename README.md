# Dash Tabler Icons

*Dash Tabler Icons* is a [Dash](https://dash.plotly.com/) component library containing 2900+ icons from the [Tabler Icon Set](https://tabler-icons.io/).

## Getting Started

1. Install [Dash](https://dash.plotly.com/),

```
$ python -m pip install dash
```

2. Install dash-tabler-icons,

```
$ python -m pip install 'dash-tabler-icons @ git+https://github.com/mikejturner/dash-tabler-icons'
```

3. Create a file call *app.py* with the following example code,

```python
import dash_tabler_icons as dti
from dash import Dash, html

app = Dash(__name__)

app.layout = html.Div([
    dti.IconGhost(size=64, color="teal", stroke=2),
])


if __name__ == '__main__':
    app.run_server(debug=True)
```

In the example above:

- The dash_tabler_icons python package is imported as *dti*.
- A dash app called *app* is created.
- The app layout is set to a single *div* containing a single icon (ghost) from tabler icons.
- The ghost icon is styled. It's *size* is set to 24px; it's *color* (stroke-color) is set to teal and it's *stroke* (stroke-width) is set to 2px.

4. Run the example,

```
$ python app.py
```

and open the url in the browser. You should see a teal colored ghost:

![Ghost Icon from Dash Example](images/GhostIconFromDashExample.png)

## Getting Help

We use [GitHub issues](https://github.com/mikejturner/dash-tabler-icons/issues) for tracking bugs and feature requests.

## Contributing

### Install dependencies

If you have selected install_dependencies during the prompt, you can skip this part.

1. Install npm packages
    ```
    $ npm install
    ```
2. Create a virtual env and activate.
    ```
    $ python -m venv myvenv
    $ source myvenv/bin/activate
    ```
    _Note: myvenv\Scripts\activate for windows_

3. Install python packages required to build components.
    ```
    $ pip install -r requirements.txt
    ```
4. Install the python packages for testing (optional)
    ```
    $ pip install -r tests/requirements.txt
    ```

### Build dash-tabler-icons:

1. Generate the .tsx icon files.
    ```
    $ node scripts/generate.js
    ```

> The above command assumes you have node installed globally. 

This commands generates a .tsx file for each icon in the Tabler Icon set. The tsx files are placed in the directory `src/ts/components`.

> The `scripts/generate.js` file uses the javascript package [template-file](https://www.npmjs.com/package/template-file) and the `scripts/generate.js` along with the `scripts/icon.tsx.template` file to generated these file. It also generates the file `src/ts/index/ts` using the `scripts/index.ts.template` file.

2. Build your code:
    ```
    $ npm run build
    ```