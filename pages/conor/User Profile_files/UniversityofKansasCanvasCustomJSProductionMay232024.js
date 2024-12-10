// Append a custom "New Access Token" that links to another website.
$('.add_access_token_link').after(
  `<a
    href="https://canvas.ku.edu/courses/385/pages/canvas-access-tokens"
    class="btn btn-primary"
    target="_blank"
  ><i class="icon-plus" aria-hidden="true" style="margin-right: 4px;"></i>New Access Token</a>`
);

//Custom JS for Ally Alternative formats and instructor indicators
window.ALLY_CFG = {
    'baseUrl': 'https://prod.ally.ac',
    'clientId': 10189,
'lti13Id': '191320000000000259'
};
$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');