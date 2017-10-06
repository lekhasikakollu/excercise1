 function addButton() {

            var countryNameSelected = $('#addcountryId').val();
            if (countryNameSelected == ' ')
                alert('Please select a country');
            else {

                //Creating a 'button' , setting properties to it and then adding it to html

                var theButton = document.createElement("button");
                theButton.className = "buttons";
                theButton.setAttribute("id", "button" + countryNameSelected);
                var buttonValue = document.createTextNode(countryNameSelected);
                theButton.appendChild(buttonValue);
                //theButton.css("color",getRandomColor());
                theButton.setAttribute('style', 'color:' + getRandomColor() + '');

                $('.buttonSection').append(theButton);
            }
        }

        function removeButton() {

            var countryNameSelected = $('#removecountryId').val();
            var requiredId = '#' + countryNameSelected;
            var buttonToRemove = $('.buttonSection').find('#button' + countryNameSelected);

            if (countryNameSelected == ' ')
                alert('Please select a country !');
            if (buttonToRemove.length == 0)
                alert('Cannot remove a country that is not previously added. !')
            else {
                buttonToRemove.remove();
            }

        }

        //Code from codereview.com
        function getRandomColor() {
            var chars = '0123456789ABCDEF'.split('');
            var hex = '#';
            for (var i = 0; i < 6; i++) {
                hex += chars[Math.floor(Math.random() * 16)];
            }
            return hex;
        }