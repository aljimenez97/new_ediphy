import Ediphy from '../../core/editor/main';

export default function version(state = "3") {
    return Ediphy.Config.version;
}
// Mirar si siempre devuelve esto o la de state
