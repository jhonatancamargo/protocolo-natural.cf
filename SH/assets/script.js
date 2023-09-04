function updateLink(sizeId, buttonId) {
            // Obtém o elemento da caixa de seleção pelo ID
            const sizeSelect = document.getElementById(sizeId);

            // Obtém o valor selecionado na caixa de seleção
            const selectedSize = sizeSelect.value;

            // Obtém o elemento do botão pelo ID
            const buyButton = document.getElementById(buttonId);

            // Atualiza o atributo data-link do botão com base no tamanho selecionado
            switch (selectedSize) {
                case "pp":
                    buyButton.setAttribute('data-link', 'https://duasmocinhas.pay.yampi.com.br/r/J2NU74XAGW');
                    break;
                case "p":
                    buyButton.setAttribute('data-link', 'https://duasmocinhas.pay.yampi.com.br/r/1P9L3DNI4K');
                    break;
                case "m":
                    buyButton.setAttribute('data-link', 'https://duasmocinhas.pay.yampi.com.br/r/C0ZYGD66Z7');
                    break;
                case "g":
                    buyButton.setAttribute('data-link', 'https://duasmocinhas.pay.yampi.com.br/r/M5KNK0TVLQ');
                    break;
                case "gg":
                    buyButton.setAttribute('data-link', 'https://duasmocinhas.pay.yampi.com.br/r/9PA10ENGUJ');
                    break;
                case "xg":
                    buyButton.setAttribute('data-link', 'https://duasmocinhas.pay.yampi.com.br/r/8VQXH1O9GH');
                    break;
                default:
                    break;
            }
        }