﻿namespace PropertyManagementDotnetWebApi
{
    public class NotificationsResponse
    {
        public IEnumerable<Notification> Notifications
        {
            get => new List<Notification>()
        {
            new Notification(){Id = 0, Name= "Финансијски извештај за март", Description=@"Месечни 
            финансијски извештај", Time = new DateTime(2023,3,11)},
            new Notification(){Id = 1, Name= "Извештај стања о новцу за поправку крова", Description=@"Овде излажемо извештај 
            стања о поправци крова.", Time = new DateTime(2023,2,11)},
            new Notification(){Id = 2, Name= "Кишовит дан", Description=@"Данас 
            је кишовит дан.", Time = new DateTime(2023,4,11)},
            new Notification(){Id = 3, Name= "Сакупљње новца за ремонтирање лифта", Description=@"Данас почињемо 
            са сакупљњем новца за потпуно ремонтирање малог лифта.", Time = new DateTime(2023,5,11)},
            new Notification(){Id = 4, Name= "Сакупљање новца за поправку крова", Description=@"Сакупљање новца за поправку крова\r\n\r\n
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at odio sed nulla rhoncus malesuada. Pellentesque metus quam, convallis eget massa eget, lobortis congue velit. Nunc ultrices vehicula interdum. Donec sit amet egestas metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium mollis suscipit. Aliquam rutrum blandit lacus. Morbi justo augue, dignissim eget consectetur et, volutpat quis dui. Fusce vehicula imperdiet rutrum. Donec iaculis magna risus, in aliquam leo ornare quis. Phasellus vel convallis felis. Aenean nec semper ipsum, quis luctus neque. Duis fringilla viverra odio, et viverra ligula venenatis eu. Maecenas molestie nulla a turpis tempus, vitae dictum ante suscipit. Pellentesque a felis ex. Pellentesque eleifend commodo magna. Nullam fringilla sit amet orci ut condimentum. Donec eget nulla sodales, consequat risus tempus, ultricies quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pretium, ligula a ultricies consequat, sapien massa malesuada leo, eu consectetur ipsum ex eget ipsum. Suspendisse luctus vitae purus ac fringilla. Vestibulum imperdiet lectus nulla, sit amet egestas diam ullamcorper ut. Donec id massa est. Proin nec eros euismod, ultrices lectus ac, tincidunt ante. Nam consequat purus dapibus arcu aliquet elementum. Aenean nec ex in purus tempor dignissim. Sed auctor, odio quis facilisis vehicula, mauris quam dignissim libero, condimentum suscipit sapien turpis eget metus. Integer nec purus mi. Ut nec nibh eu lacus faucibus maximus. Vivamus imperdiet convallis eros, ut congue lorem porta tincidunt. Aenean tincidunt fringilla semper. Quisque pulvinar, turpis rutrum gravida lacinia, eros orci egestas libero, at luctus ligula nunc eu justo. Aliquam erat volutpat. Donec ac ante lorem. Nullam at erat risus. Maecenas dictum justo ac sem venenatis mollis. Vivamus vel euismod turpis, id vestibulum neque. In hac habitasse platea dictumst. Sed rutrum orci vitae metus suscipit efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce suscipit lectus sed turpis molestie euismod. Vestibulum urna nulla, fringilla et malesuada vitae, congue quis felis. Suspendisse sodales facilisis turpis eu egestas. Quisque id libero sed orci faucibus laoreet sit amet finibus sem. Ut lobortis, libero eget pharetra gravida, elit elit commodo massa, ut ornare lorem quam ac nisl. Cras dictum porttitor pulvinar. Etiam malesuada, augue vel tristique rutrum, orci odio dapibus arcu, imperdiet commodo diam sem vel neque. Curabitur semper magna ut venenatis facilisis. Nunc aliquet augue orci, id sollicitudin arcu luctus vitae. Vivamus in erat mauris. Donec non luctus turpis, vulputate finibus enim. Aenean turpis augue, faucibus non orci nec, pellentesque tincidunt augue. Fusce maximus eu mi non gravida.", Time = DateTime.UtcNow}

        };
        }
    }
}
