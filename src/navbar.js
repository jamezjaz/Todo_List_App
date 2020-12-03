import { header } from './selectors';

const nav = (() => {
  header.innerHTML = `
                    <nav class='bg-primary text-center font-weight-bold py-3'>
                        <a class="navbar-brand text-light" href="index.html">
                        <i class="fas fa-scroll p-2"></i>
                            TODO LIST
                        </a>
                    </nav>
                    `;
})();

export default nav;