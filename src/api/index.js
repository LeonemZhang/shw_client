'use strict';
export const BASE_URL = "http://172.16.28.19:9000";
export const CAS_LOGIN_URL = BASE_URL + "/login";
export const CAS_LOGOUT_URL = BASE_URL + "/logout";

export function Student() {
  const str = "/student";
  return {
    groups: BASE_URL + str + '/groups',
    works_undone: BASE_URL + str + '/works/un_done',
    works_done: BASE_URL + str + '/works/done',
    upload: BASE_URL + str + '/upload/',
    addGroup: BASE_URL + str + '/group',
    dropOutGroup: BASE_URL + str + '/group/',
    uploadWork: BASE_URL + str + '/work/',
    deleteUpload: BASE_URL + str + '/work/',
    existGroup: BASE_URL + str + '/group/exist',
    downWork: BASE_URL + str + '/down/',
    downPreview: BASE_URL + str + '/down_preview/',
    notices: BASE_URL + str + '/notices',
    getReview: BASE_URL + str + '/review/',
    delNotice: BASE_URL + str + '/notice/',
  }
}

export function Teacher() {
  const str = "/teacher";
  return {
    groups: BASE_URL + str + '/groups',
    existGroup: BASE_URL + str + '/group/exist',
    createGroup: BASE_URL + str + '/group',
    delGroup: BASE_URL + str + '/group/',
    upGroupName: BASE_URL + str + '/group/',
    works: BASE_URL + str + '/works',
    work: BASE_URL + str + '/work/',
    createWork: BASE_URL + str + '/work',
    delWork: BASE_URL + str + '/work/',
    upWorkEnabled: BASE_URL + str + '/work/enabled/',
    upWorkName: BASE_URL + str + '/work/name/',
    workDetail: BASE_URL + str + '/work_detail/',
    pack: BASE_URL + str + '/pack/',
    downAll: BASE_URL + str + '/down/',
    downNow: BASE_URL + str + '/down_now/',
    downInZip: BASE_URL + str + '/down_in_zip/',
    zipPreview: BASE_URL + str + '/zip_preview/',
    reviewWork: BASE_URL + str + '/review/',
    getReviewWork: BASE_URL + str + '/review/',
  }
}
