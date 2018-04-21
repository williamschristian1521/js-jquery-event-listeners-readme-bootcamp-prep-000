$(document).ready(function(){
  getIt()
  frameIt()
});

function getIt()
{
  $('p').on('click', function()
  {
    alert('Hey!')
  })
}

function frameIt()
{
  $('img').on('load', function()
  {
    $('img').addClass('tasty')
  })
}

function pressIt()
{
  $('form input').on('keydown', function(key)
  {
    if(key === 71)
    {
      alert('You pressed the "G" key.')
    }
  })
}

function submitIt()
{
  $('form').on('submit', function()
  {
    alert('Your form is going to be submitted now.')
  })
}