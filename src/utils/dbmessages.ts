import { Message } from "./Messages"

type Value = {
    [key: string]: Message[]
} 
const db:Value = {
    enero: [
        {
            regalo: "Año Nuevo", 
            body: "Parece que fuiste consevido entre el 1 al 6 de Enero por lo que es probable que hayas sido engendrado en una fiesta de año nuevo", 
            img: "https://images.unsplash.com/photo-1566571688621-2dca2366154e?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            regalo: "Reyes", 
            body: "Fuiste consevido entre el 6 al 31 de enero por lo que puede que fueras un coito de día de reyes",
            img: "https://images.unsplash.com/photo-1671905516173-4e81fa932b62?q=80&w=2168&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
    ], 
    febrero: [
        {
            regalo:"San Valentin", 
            body: "Un clasico, día de los enamorados, parece bastante obvio que fue lo que paso aqui. Se sentía el romance por todas partes. Consevido entre 1 y 16 de febrero", 
            img: "https://static.wixstatic.com/media/6ca513_a30ea633b9574d93883e8746fef92626~mv2.jpg/v1/fill/w_736,h_1104,al_c,q_85,enc_auto/6ca513_a30ea633b9574d93883e8746fef92626~mv2.jpg"
        }, 
        {
            regalo: "Día de la bandera", 
            body: "El sentimiento patriota se sentia muy fuerte impulsando a que las cosas pasaran. Consevido entre 17 y 29", 
            img: "https://img.freepik.com/fotos-premium/soldado-patriotico-saludando-frente-bandera-nacional_804788-8222.jpg"
        }
    ], 
    marzo: [
        {
            regalo: "Día de la Mujer", 
            body: "Que mejor dia para festejar a la mujer, entre 1 hasta el 17", 
            img: "https://www.publico.es/uploads/2017/03/08/58c07abdc26e9.jpg"
        }, 
        {
            regalo: "Día de la exporpiacion petrolera", 
            body: "Todos tenemos nuestras formas de celebrar me parece unico que dedieran este dia, pero no juzgo a nadie. Consevido entre 18 y 20",
            img: "https://images.unsplash.com/photo-1541661538396-53ba2d051eed?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            regalo: "Del Natalisio de Benito Juarez", 
            body: "Como no querer a el buen benito juarez, el naciendo y tu que estabas en proceso de llegar", 
            img: "https://imggraficos.gruporeforma.com/2022/07/benito.jpg"
        }, 
    ], 
    abril:[
        {
            regalo: "Día del Libro", 
            body: "Un cafe y un libro no es veredad? Parece que andar leyendo tanto inspiro en tus padres ganas de otra cosa a parte de leer", 
            img: "https://images.unsplash.com/photo-1544963222-8d994a32ec9b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            regalo:"Día del Niño", 
            body: "Andar todo el dia pensando en niños, la publicidad, todo influye para cuando uno decide que momento de tener el propio.", 
            img: "https://images.unsplash.com/photo-1526548185067-231ab81c7178?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            regalo: "Semana Santa", 
            body: "Tanto tiempo libre tenian que encontrar una forma de pasar el rato. Mienstras la abuela rezaba y sufria por la partida de nuetro salvador jesucristo, tu madre es la que pedia piedad",
            img: "https://images.unsplash.com/photo-1606604453074-aaf4097e8a2b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ], 
    mayo: [
        {
            regalo: "Día del Trabajo", 
            body: "Le dieron el día libre a tu papa y pues que buene forma de pasar el rato no crees?",
            img: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            regalo: "Día de la Madre", 
            body:"El dia para festejar a las mamás y que regalo que le dieron a la tuya, más razones para celebrar el año que venia", 
            img: "https://images.unsplash.com/photo-1666722718088-05192e7ea03f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            regalo: "Día del Estudiante", 
            body: "Fantasia de muchos la de profesor y alumna puede que esta fecha haya encedido algo reprimido y una ganas de intetar cosas nuevas, reensender la llama de la relacion", 
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nFO-NuwGeTxu5N9WznxMQzI5eoFy9A01TVab9yHm-LhSEULk35sO_3-XMOITxyqk_Fc&usqp=CAU"
        }
    ], 
    junio:[
        {
            regalo: "Día del medio ambiente", 
            body:"Parece que tus papas les gusta las plantas, cuando vayas al jardin piensa en ese amor intenso a estas",
            img: "https://images.unsplash.com/photo-1514480219591-7428ac450122?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            regalo: "Día del Mejor Amigo", 
            body:"Esta es personal, fue en honor a todos nuestros soldados caidos en el camino", 
            img: "https://i.pinimg.com/736x/b2/1f/0c/b21f0c7d71080a3cc4675b5b0fd4e6c6.jpg"
        }, 
        {
            regalo: "Día del Padre",
            body: "Así como mamá es festejada papá tambien tiene que serlo que mejor regalo que el que el cuerpo puede dar", 
            img: "https://images.unsplash.com/photo-1601193708180-afe6737e5636?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ], 
    julio:[
        {
            regalo: "Día del ingeniero", 
            body: "Día especial para todos los ingenieros del mundo no podian qudarse sin festejar. Todos conocemos lo importante que este día para tu papá", 
            img: "https://images.unsplash.com/photo-1581092163144-b7ae3c00adbc?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            regalo: "Día de la Secretaria", 
            body: "La fantasia de muchos que al parecer se cumplio en este caso, o por lo menos hizo pensar a tus padre en el que pasaría si", 
            img: "https://static.vecteezy.com/system/resources/thumbnails/014/064/557/small_2x/sexy-secretary-with-binders-photo.jpg"
        }
    ],
    agosto:[
        {
            regalo:"Día del Zurdo", 
            body:"Pocos sabesmos que este día existe. Pero, no tus padres, ellos lo festejaron con mucho fuldor", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJiaKPv5wpyRiBgmXZzGUuM57QCQKHJ76jpA&s"
        }, 
        {
            regalo:"Día del Abuelo", 
            body:"Que forma de felcitar al suegro que enprotando su creación",
            img: "https://images.unsplash.com/photo-1566761284295-af58908238bb?q=80&w=3085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ], 
    septiembre: [
        {
            regalo: "Día del Desarrollador", 
            body: "El 13 de semptiembre el dia en que le andaban reiniciando el windows a tu madre",
            img:"https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            regalo:"Día de los niños Heroes", 
            body: "Día en el que recordamos a nuestros niños heroes, lo hacemos creando unos nuevos", 
            img: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2022/09/chapultepec-3.jpg"
        }, 
        {
            regalo: "Día de las flores Amarillas", 
            body:"Empezando la primavera con todo. Al parecer las flores fueron suficientes para ponerse amorosos", 
            img:"https://images.unsplash.com/photo-1651568773893-284763ed694f?q=80&w=3079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            regalo: "Día de la independencia", 
            body: "Como no emocionarse por la independencia de Mexico, tacos, panbazo, danza y un hijo para cerrar la velada", 
            img:"https://eltiempodelaltiplano.com/wp-content/uploads/2023/09/images-27.jpeg"
        }
    ], 
    octubre: [
        {
            regalo: "Día de tlaloc", 
            body: "Volviendo a las raices mexicanas, como no festejar a tlaloc uno de los dioses más importantes. Además que más van a hacer miestras afuera esta lloviendo", 
            img: "https://www.worldhistory.org/img/r/p/1500x1500/1402.jpg"
        }, 
        {
            regalo: "Descuscubrimiento de America", 
            body: "El momento para poder pensar en el momento en que cristobal colon llego a america, con esa carita como no exitarse",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxAxy0R4Xzw_N3b2ekt8LEL63OIQw_FRvz0Q&s"
        }, 
        {
            regalo: "Hallowean", 
            body: "Con tantas fiestas en una de esas que el ambiente se caliente no es muy loco de pensar", 
            img: "https://st4.depositphotos.com/3584053/40365/i/450/depositphotos_403651350-stock-photo-buttocks-ass-and-pumpkin-close.jpg"
        }
    ],
    noviembre: [
        {
            regalo:"Día de Muertos", 
            body: "Un día para estar con la familia, pensar en los difuntos. Ah, tambien para disfrutar de un tiempo en pareja, como no", 
            img:"https://images.unsplash.com/photo-1603855873822-0931a843ee3a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            regalo:"Día de la Revolucion Mexicana", 
            body: "Como buen patriota de la nacion como no festejar a la nacion", 
            img: "https://ih2.redbubble.net/image.6767729.8444/flat,550x550,075,f.jpg"
        }
    ], 
    diciembre: [
        {
            regalo: "Dia de la Virgen", 
            body: "Festejando a la madre de madres. La virgen maria pero aca ninguna virgen puede festejarla", 
            img:"https://www.vaticanocatolico.com/imagenes_catolicas/biblia/maria-perpetuamente-virgen_g.jpg"
        }, 
        {
            regalo: "Navidad", 
            body: "No habia presupuesto para los regalos y toco inprovisar uno, ofrecerse como regalo siempre es una buena idea", 
            img: "https://images.unsplash.com/photo-1612478700324-a39e1f1c4952?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            regalo: "Año Nuevo", 
            body: "La fiesta se puso muy buena y una cosa llevo a la otra y pues las cosas pasan por alguna razon", 
            img: "https://images.unsplash.com/photo-1566571688621-2dca2366154e?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
}
export default db