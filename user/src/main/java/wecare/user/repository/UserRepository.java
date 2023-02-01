package wecare.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import wecare.user.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
