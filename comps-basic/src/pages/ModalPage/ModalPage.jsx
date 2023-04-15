import { useState } from "react";
import Button from "../../components/Button/Button";
import Modal from "../../components/modal/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onButtonClick = () => {
    setShowModal(true);
  };

  const onModalBGClick = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button primary onClick={onButtonClick}>
        Open Modal
      </Button>
      {showModal && (
        <Modal
          onModalBGClick={onModalBGClick}
          actionBar={
            <div>
              <Button primary onClick={() => setShowModal(false)}>
                I Accept
              </Button>
            </div>
          }
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga in nostrum, eius saepe fugiat at
            dolores quibusdam velit necessitatibus doloremque mollitia incidunt sunt aliquam recusandae consequatur
            aperiam iure doloribus maiores voluptatibus sint minima minus. Commodi fuga nesciunt eligendi labore ad
            earum quis delectus debitis eveniet sit, excepturi doloremque! Necessitatibus dignissimos quia quis dolorum
            adipisci asperiores nihil animi soluta delectus nesciunt eveniet exercitationem, autem ad eius est assumenda
            quaerat aliquam natus, sit velit neque sed veniam hic ipsum! Omnis labore assumenda, tempora adipisci earum
            autem aperiam voluptates repudiandae, quidem, aut sit. Officia a voluptatibus neque magnam nisi molestias ad
            tenetur expedita harum ab maiores aut, quos asperiores quibusdam. Recusandae, excepturi explicabo. Aliquid
            aperiam voluptates ipsa aut, perferendis placeat dolorem laudantium doloremque! Quidem sit blanditiis vitae
            veniam voluptas provident ratione perspiciatis ad eius voluptatum, possimus tenetur ea repellendus commodi
            et maiores a sunt deleniti inventore ipsam eveniet? Placeat illum consectetur, vitae aut corrupti minima ut
            officiis aliquid recusandae, molestias similique quia libero doloremque facilis eius adipisci nulla iste
            dolore nam, excepturi cum quisquam. Harum quae officia, sit perspiciatis itaque quidem enim assumenda et, ab
            distinctio voluptas possimus omnis incidunt quod temporibus ipsum debitis maiores ex ipsam, asperiores
            doloribus quo modi rerum. Magni recusandae rem voluptas sint saepe nisi et earum quo sequi ipsam sit, sed
            deserunt minus temporibus dolorem exercitationem esse animi modi? Vel quasi blanditiis quos ullam sapiente?
            Possimus autem laudantium quod iure soluta itaque veniam amet asperiores eos, recusandae ducimus mollitia
            reprehenderit quo aliquam, commodi harum earum deleniti quibusdam. Dolor tempore consequuntur culpa
            voluptatum, sunt blanditiis fugit eos quo saepe quidem provident adipisci! Eveniet laboriosam asperiores
            consequuntur vero tenetur ea, nulla officiis eligendi voluptas voluptates nihil accusamus ullam aperiam
            totam architecto facilis perferendis hic esse sed? Nemo accusantium corporis facilis labore? Adipisci,
            temporibus molestias facilis magni sed optio explicabo?
          </p>
        </Modal>
      )}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque fugiat repudiandae cumque culpa! Iste
        molestias sed laborum quas totam sit sequi aspernatur unde ut ullam. Illum harum, ratione accusantium dolores
        inventore cum exercitationem eum quasi similique nobis ipsam explicabo assumenda quos reprehenderit,
        necessitatibus consequuntur. Similique provident, ipsam ipsum laboriosam atque consectetur quia fugiat, sunt sed
        magnam fugit, quibusdam unde hic doloribus! Rem ratione, quis alias repellat, dicta eaque eveniet voluptas
        exercitationem nulla illum optio, minus repudiandae voluptatibus hic itaque? Est ipsam delectus voluptatem
        veritatis, dolore sunt odit deserunt laudantium magni eum laboriosam maxime error cum similique nulla iusto rem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque fugiat repudiandae cumque culpa! Iste
        molestias sed laborum quas totam sit sequi aspernatur unde ut ullam. Illum harum, ratione accusantium dolores
        inventore cum exercitationem eum quasi similique nobis ipsam explicabo assumenda quos reprehenderit,
        necessitatibus consequuntur. Similique provident, ipsam ipsum laboriosam atque consectetur quia fugiat, sunt sed
        magnam fugit, quibusdam unde hic doloribus! Rem ratione, quis alias repellat, dicta eaque eveniet voluptas
        exercitationem nulla illum optio, minus repudiandae voluptatibus hic itaque? Est ipsam delectus voluptatem
        veritatis, dolore sunt odit deserunt laudantium magni eum laboriosam maxime error cum similique nulla iusto rem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque fugiat repudiandae cumque culpa! Iste
        molestias sed laborum quas totam sit sequi aspernatur unde ut ullam. Illum harum, ratione accusantium dolores
        inventore cum exercitationem eum quasi similique nobis ipsam explicabo assumenda quos reprehenderit,
        necessitatibus consequuntur. Similique provident, ipsam ipsum laboriosam atque consectetur quia fugiat, sunt sed
        magnam fugit, quibusdam unde hic doloribus! Rem ratione, quis alias repellat, dicta eaque eveniet voluptas
        exercitationem nulla illum optio, minus repudiandae voluptatibus hic itaque? Est ipsam delectus voluptatem
        veritatis, dolore sunt odit deserunt laudantium magni eum laboriosam maxime error cum similique nulla iusto rem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque fugiat repudiandae cumque culpa! Iste
        molestias sed laborum quas totam sit sequi aspernatur unde ut ullam. Illum harum, ratione accusantium dolores
        inventore cum exercitationem eum quasi similique nobis ipsam explicabo assumenda quos reprehenderit,
        necessitatibus consequuntur. Similique provident, ipsam ipsum laboriosam atque consectetur quia fugiat, sunt sed
        magnam fugit, quibusdam unde hic doloribus! Rem ratione, quis alias repellat, dicta eaque eveniet voluptas
        exercitationem nulla illum optio, minus repudiandae voluptatibus hic itaque? Est ipsam delectus voluptatem
        veritatis, dolore sunt odit deserunt laudantium magni eum laboriosam maxime error cum similique nulla iusto rem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque fugiat repudiandae cumque culpa! Iste
        molestias sed laborum quas totam sit sequi aspernatur unde ut ullam. Illum harum, ratione accusantium dolores
        inventore cum exercitationem eum quasi similique nobis ipsam explicabo assumenda quos reprehenderit,
        necessitatibus consequuntur. Similique provident, ipsam ipsum laboriosam atque consectetur quia fugiat, sunt sed
        magnam fugit, quibusdam unde hic doloribus! Rem ratione, quis alias repellat, dicta eaque eveniet voluptas
        exercitationem nulla illum optio, minus repudiandae voluptatibus hic itaque? Est ipsam delectus voluptatem
        veritatis, dolore sunt odit deserunt laudantium magni eum laboriosam maxime error cum similique nulla iusto rem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque fugiat repudiandae cumque culpa! Iste
        molestias sed laborum quas totam sit sequi aspernatur unde ut ullam. Illum harum, ratione accusantium dolores
        inventore cum exercitationem eum quasi similique nobis ipsam explicabo assumenda quos reprehenderit,
        necessitatibus consequuntur. Similique provident, ipsam ipsum laboriosam atque consectetur quia fugiat, sunt sed
        magnam fugit, quibusdam unde hic doloribus! Rem ratione, quis alias repellat, dicta eaque eveniet voluptas
        exercitationem nulla illum optio, minus repudiandae voluptatibus hic itaque? Est ipsam delectus voluptatem
        veritatis, dolore sunt odit deserunt laudantium magni eum laboriosam maxime error cum similique nulla iusto rem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque fugiat repudiandae cumque culpa! Iste
        molestias sed laborum quas totam sit sequi aspernatur unde ut ullam. Illum harum, ratione accusantium dolores
        inventore cum exercitationem eum quasi similique nobis ipsam explicabo assumenda quos reprehenderit,
        necessitatibus consequuntur. Similique provident, ipsam ipsum laboriosam atque consectetur quia fugiat, sunt sed
        magnam fugit, quibusdam unde hic doloribus! Rem ratione, quis alias repellat, dicta eaque eveniet voluptas
        exercitationem nulla illum optio, minus repudiandae voluptatibus hic itaque? Est ipsam delectus voluptatem
        veritatis, dolore sunt odit deserunt laudantium magni eum laboriosam maxime error cum similique nulla iusto rem.
      </p>
    </div>
  );
};
export default ModalPage;
