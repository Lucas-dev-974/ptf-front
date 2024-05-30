import { Match, Switch, type JSXElement } from 'solid-js';
import { AppPagesEnum, onPage } from './app.state';
import { Home } from './views/Home';

export function App(): JSXElement {
  return <main>
    <Switch>
      <Match when={onPage() == AppPagesEnum.home}>
        <Home />
      </Match>
    </Switch>
  </main>
}

