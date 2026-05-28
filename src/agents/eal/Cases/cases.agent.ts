// import { http } from 'axios';
import axios from 'axios';

class CasesAgent {
  async getCasesCount (url, filter) {
    // const urlStr = `${url.url}${url.additionalUrl ? '/' + url.additionalUrl : ''}/${url.territorialFilter}`
    // const params = {
    //   onlyCount: true,
    //   ...(filter.citizenLastName && {
    //     filter: JSON.stringify([{
    //       operator: 'contains_with_mask_replace',
    //       value: filter.citizenLastName,
    //       property: 'citizenLastName',
    //       type: 'string'
    //     }])
    //   }),
    // };
    // const { data } = await axios.get (
    //   urlStr, {
    //     paramsSerializer: { encode: encodeURIComponent },
    //     params
    //   }
    // );
    const data = {"total":2,"data":[],"lastPage":false}

    return data;
  }

  async getCases (url, pagination, filter) {
    // const urlStr = `${url.url}${url.additionalUrl ? '/' + url.additionalUrl : ''}/${url.territorialFilter}`;
    // const params = {
    //   page: pagination.page,
    //   start: pagination.rowsPerPage * (pagination.page - 1),
    //   limit: pagination.rowsPerPage,
    //   ...(pagination.sortBy && {
    //     sort: JSON.stringify([{
    //       property: pagination.sortBy,
    //       direction: pagination.descending ? "DESC" : "ASC"
    //     }])
    //   }),
    //   ...(filter.citizenLastName && {
    //     filter: JSON.stringify([{
    //       operator: 'contains_with_mask_replace',
    //       value: filter.citizenLastName,
    //       property: 'citizenLastName',
    //       type: 'string'
    //     }])
    //   }),
    // };
    //
    // const { data } = await axios.get (
    //   urlStr, {
    //     paramsSerializer: { encode: encodeURIComponent },
    //     params
    //   }
    // );
    const data = {
      "total": 2,
      "data": [
        {
          "cvsnpCaseId": 2,
          "caseNumber": "234234",
          "caseDate": "26.05.2026",
          "citizenId": 22,
          "citizenFio": "Согласованная Упэдэна Ребёнковна",
          "dateOfBirth": "01.05.2009",
          "juvCategoryId": 5740,
          "juvCategoryTitle": "направляемый по приговору суда или по постановлению судьи в специальные учебно-воспитательные учреждения закрытого типа",
          "cvsnpId": 1,
          "cvsnpName": "Тест ЦВСНП",
          "departmentId": -770001,
          "departmentName": "ГУ МВД России по г. Москве",
          "deliveredEmployeeId": -43,
          "deliveredEmployeeFio": "Многозадачный Константин Валерьевич",
          "composerEmployeeFio": "Многозадачный Константин Валерьевич",
          "placementCauseId": 5730,
          "placementCauseTitle": "постановление судьи",
          "arrivalDate": "26.05.2026 11:16",
          "arrivalSourceId": 5734,
          "arrivalSourceTitle": "транзитный ЦВСНП",
          "departureDate": null,
          "departureReasonId": null,
          "departureReasonTitle": null
        },
        {
          "cvsnpCaseId": 1,
          "caseNumber": "234234",
          "caseDate": "26.05.2026",
          "citizenId": 1,
          "citizenFio": "Дроздова Елена Александровна",
          "dateOfBirth": "20.03.2009",
          "juvCategoryId": 5740,
          "juvCategoryTitle": "направляемый по приговору суда или по постановлению судьи в специальные учебно-воспитательные учреждения закрытого типа",
          "cvsnpId": 1,
          "cvsnpName": "Тест ЦВСНП",
          "departmentId": -770001,
          "departmentName": "ГУ МВД России по г. Москве",
          "deliveredEmployeeId": -43,
          "deliveredEmployeeFio": "Многозадачный Константин Валерьевич",
          "composerEmployeeFio": "Многозадачный Константин Валерьевич",
          "placementCauseId": 5729,
          "placementCauseTitle": "приговор суда",
          "arrivalDate": "26.05.2026 11:16",
          "arrivalSourceId": 5734,
          "arrivalSourceTitle": "транзитный ЦВСНП",
          "departureDate": null,
          "departureReasonId": null,
          "departureReasonTitle": null
        }
      ],
      "lastPage": false
    }

    return data;
  }
}

const casesAgent = new CasesAgent ();

export { casesAgent };
