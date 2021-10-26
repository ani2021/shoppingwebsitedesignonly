function ShowMenu()
{
  document.getElementById("dropdownmenu").classList.add("dropdown");
}

function PopupToggle(name)
{
  let item = document.getElementById(name);
  
  if(item.style.display === "block")
  {
    item.style.display = "none";
  }
  else
  {
    item.style.display = "block";
  }
}

function HideForm(name, formname)
{
  let item = document.getElementById(name);
  let form = document.getElementById(formname);
  item.style.display = "none";
  form.reset();
}

function ShowOptions(options, decision='yes')
{
  console.log(options);
  let d = document.getElementById(options);
  if(decision === 'no')
  {
    d.style.display = "none";
  }
  else
  {
    d.style.display = "block";
  }
}