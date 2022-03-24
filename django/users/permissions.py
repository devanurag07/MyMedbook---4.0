from rest_framework.permissions import BasePermission
from users.models import Roles


class IsDoctor(BasePermission):
    def has_object_permission(self, request, view, obj):
        if(request.is_authenticated):
            doctor_roleid = Roles.objects.get(alias="Doctors").id
            user_roleid = request.user.profile.role_id
            if(user_roleid == doctor_roleid):
                return True
            return False

        return False


class IsAdmin(BasePermission):
    def has_object_permission(self, request, view, obj):
        if(request.is_authenticated):
            is_superuser = request.is_superuser
            return is_superuser
        return False
