// 恢复选项状态
function restoreOptions() {
    chrome.storage.sync.get({ enableSort: true, maxScrollAttempts: 30 }, function (items) {
        document.getElementById('enableSort').checked = items.enableSort;
        document.getElementById('maxScrollAttemptsInput').value = items.maxScrollAttempts;
    });
}

// 保存选项状态
function saveOptions() {
    var enableSort = document.getElementById('enableSort').checked;
    var maxScrollAttempts = parseInt(document.getElementById('maxScrollAttemptsInput').value);
    chrome.storage.sync.set({ enableSort: enableSort, maxScrollAttempts: maxScrollAttempts });
}

// 监听复选框和输入框的变化
document.getElementById('enableSort').addEventListener('change', saveOptions);
document.getElementById('maxScrollAttemptsInput').addEventListener('change', saveOptions);

// 页面加载时恢复选项状态
document.addEventListener('DOMContentLoaded', restoreOptions);
