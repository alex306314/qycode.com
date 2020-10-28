import {
  Container
} from './index.styled';

export const LayoutFooter = () => {

  return (
    <footer class="g-footer">
      <section>{{ site.title }} ©
      {% assign current = "now" | date: "%Y" | plus: 0%}
      {% unless site.footer.since and site.footer.since == current %}
        {{ site.footer.since }}
        -
      {% endunless %}
      {{ current }}
      </section>
      <section>Powered by <a href="//jekyllrb.com">Jekyll</a> | <a href="https://github.com/kaeyleo/jekyll-theme-H2O">Theme H2O</a></section>
    </footer>
  );
}