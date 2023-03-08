import 'jquery';
import './style.less';

export default class Exemplo {
    
    teste(url: string, params: any) {
        console.log('get para a url: ', url);
        return $.get(url, params);
    }
}
