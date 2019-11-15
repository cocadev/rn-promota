import { html1 } from '../webviews/tem1/html';
import { html2 } from '../webviews/tem2/html';
import { html3 } from '../webviews/tem3/html';

import  json1  from '../webviews/tem1/data.json';
import  json2  from '../webviews/tem2/data.json';
import  json3  from '../webviews/tem3/data.json';

class UtilService {
    static FilterTemplate(templateId) {
        if (templateId == '1-1-01') { return html1 }
        if (templateId == '1-1-02') { return html2 }
        if (templateId == '1-1-03') { return html3 }

    };
    static FilterJson(templateId) {
        if (templateId == '1-1-01') { return json1 }
        if (templateId == '1-1-02') { return json2 }
        if (templateId == '1-1-03') { return json3 }
    };
}

export default UtilService
