const bgButtons = document.querySelector(".pageContent");
const buttonConfig = (text, href) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("bgButton");
  button.addEventListener("click", () => {
    window.location.href = href;
  });
  return button;

};


const Button51 = buttonConfig("Название раздела", 'Ссылка на раздел');
const Button52 = buttonConfig("Название раздела", 'Ссылка на раздел');
const Button53 = buttonConfig("Название раздела", 'Ссылка на раздел');
const Button54 = buttonConfig("Название раздела", 'Ссылка на раздел');
const Button55 = buttonConfig("Название раздела", 'Ссылка на раздел');
const ButtonTech51 = buttonConfig("Название раздела", 'Ссылка на раздел');
const ButtonTech52 = buttonConfig("Название раздела", 'Ссылка на раздел');
const ButtonTech53 = buttonConfig("Название раздела", 'Ссылка на раздел');
const ButtonTech54 = buttonConfig("Название раздела", 'Ссылка на раздел');
const ButtonTech55 = buttonConfig("Название раздела", 'Ссылка на раздел');
const ButtonComp51 = buttonConfig("Название раздела", 'Ссылка на раздел');
const ButtonComp52 = buttonConfig("Название раздела", 'Ссылка на раздел');
const ButtonComp53 = buttonConfig("Название раздела", 'Ссылка на раздел');
const ButtonComp54 = buttonConfig("Название раздела", 'Ссылка на раздел');
const ButtonComp55 = buttonConfig("Название раздела", 'Ссылка на раздел');
const ButtonComp533 = buttonConfig("ОПС", "https://forum.blackrussia.online/threads/Общие-правила-серверов.312571/")



bgButtons.append(Button51);
bgButtons.append(Button52);
bgButtons.append(Button53);
bgButtons.append(Button54);
bgButtons.append(Button55);
bgButtons.append(ButtonTech51);
bgButtons.append(ButtonTech52);
bgButtons.append(ButtonTech53);
bgButtons.append(ButtonTech54);
bgButtons.append(ButtonTech55);
bgButtons.append(ButtonComp51);
bgButtons.append(ButtonComp52);
bgButtons.append(ButtonComp53);
bgButtons.append(ButtonComp54);
bgButtons.append(ButtonComp55);
bgButtons.append(ButtonComp533);

