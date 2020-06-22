function render() {
    var hash = decodeURIComponent(location.hash).slice(1).split("&"),
        regionState = hash[0].slice(hash[0].indexOf("=") + 1),
        productState = hash[1].slice(hash[1].indexOf("=") + 1);

        if (regionState.length === 0 || productState.length === 0) {
            return ;
        }
        regionState = regionState.split("+");
        productState = productState.split("+");
    
        var regionCheckboxs = document.querySelectorAll("#region-radio-wrapper input[checkbox-type='single']"),
            productCheckboxs = document.querySelectorAll("#product-radio-wrapper input[checkbox-type='single']"),
            regionAllCheckboxs = document.querySelector("#region-radio-wrapper input[checkbox-type='all']"),
            productAllCheckboxs = document.querySelector("#product-radio-wrapper input[checkbox-type='all']"),
            i;
            if (regionState.length === 3) {
                regionAllCheckboxs.checked = true;
            }
            if (productState.length === 3) {
                productAllCheckboxs.checked = true;
            }
            for (i = 0; i < regionState.length; i++) {
                if (regionState[i] === "华东") {
                    regionCheckboxs[0].checked = true;
                }
                if (regionState[i] === "华南") {
                    regionCheckboxs[1].checked = true;
                }
                if (regionState[i] === "华北") {
                    regionCheckboxs[2].checked = true;
                }
            }
            for (i = 0; i < productState.length; i++) {
                if (productState[i] === "手机") {
                    productCheckboxs[0].checked = true;
                }
                if (productState[i] === "笔记本") {
                    productCheckboxs[1].checked = true;
                }
                if (productState[i] === "智能音箱") {
                    productCheckboxs[2].checked = true;
                }
            }
        }
        
     